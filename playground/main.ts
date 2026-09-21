import { Controller } from "@gottheflag/nova";
import { Button } from "@gottheflag/nova/adapters";
import { LocalStorage } from "@gottheflag/nova/storage";

const root = document.documentElement;

const theme = new Controller(document, {
	storage: new LocalStorage({
		key: "@gottheflag/ui:playground-theme",
	}),
	attribute: "data-theme",
	initial: "system",
	light: "light",
	dark: "dark",
	system: "system",
	observe: true,
});

theme.use(Button, {
	prefix: "theme:",
});

const syncThemeButtons = () => {
	const state = theme.state ?? "system";

	for (const button of document.querySelectorAll<HTMLButtonElement>(
		'button[value^="theme:"]',
	)) {
		button.setAttribute(
			"aria-pressed",
			String(button.value === `theme:${state}`),
		);
	}
};

theme.on("change", syncThemeButtons);
theme.set(theme.state ?? "system");
syncThemeButtons();

const directionKey = "@gottheflag/ui:playground-direction";
const directionButtons = document.querySelectorAll<HTMLButtonElement>(
	"[data-playground-direction]",
);

const setDirection = (direction: "ltr" | "rtl") => {
	root.dir = direction;
	localStorage.setItem(directionKey, direction);

	for (const button of directionButtons) {
		button.setAttribute(
			"aria-pressed",
			String(button.dataset.playgroundDirection === direction),
		);
	}
};

for (const button of directionButtons) {
	button.addEventListener("click", () => {
		setDirection(
			button.dataset.playgroundDirection === "rtl" ? "rtl" : "ltr",
		);
	});
}

setDirection(localStorage.getItem(directionKey) === "rtl" ? "rtl" : "ltr");

const filter = document.querySelector<HTMLInputElement>("[data-playground-filter]");
const sections = [
	...document.querySelectorAll<HTMLElement>("[data-playground-component]"),
];
const navLinks = [
	...document.querySelectorAll<HTMLAnchorElement>("[data-playground-link]"),
];

const applyFilter = () => {
	const query = filter?.value.trim().toLocaleLowerCase() ?? "";

	for (const section of sections) {
		const matches = !query ||
			section.dataset.playgroundSearch?.toLocaleLowerCase().includes(query);
		section.hidden = !matches;
	}

	for (const link of navLinks) {
		const target = document.querySelector<HTMLElement>(link.hash);
		link.hidden = Boolean(target?.hidden);
	}
};

filter?.addEventListener("input", applyFilter);

// A single manual popover keeps collapsed-rail labels in the top layer,
// above previews, sticky regions, and any local stacking contexts.
const sidebar = document.querySelector<HTMLElement>(".lab-sidebar");
const sidebarToggle = document.querySelector<HTMLInputElement>("#lab-sidebar-toggle");
const sidebarTooltip = document.querySelector<HTMLElement>("#lab-sidebar-tooltip");
const railViewport = matchMedia("(width >= 48rem) and (width < 64rem)");

const hideSidebarTooltip = () => {
	if (sidebarTooltip?.matches(":popover-open")) sidebarTooltip.hidePopover();
};

const showSidebarTooltip = (item: HTMLAnchorElement) => {
	if (!sidebarTooltip || !railViewport.matches || sidebarToggle?.checked) return;

	const label = item.getAttribute("aria-label");
	if (!label) return;

	const rect = item.getBoundingClientRect();
	sidebarTooltip.textContent = label;
	sidebarTooltip.style.insetBlockStart = `${rect.top + rect.height / 2}px`;
	sidebarTooltip.style.insetInlineStart = root.dir === "rtl"
		? `${innerWidth - rect.left + 8}px`
		: `${rect.right + 8}px`;
	sidebarTooltip.showPopover();
};

for (const link of navLinks) {
	link.addEventListener("pointerenter", () => showSidebarTooltip(link));
	link.addEventListener("pointerleave", hideSidebarTooltip);
	link.addEventListener("focus", () => showSidebarTooltip(link));
	link.addEventListener("blur", hideSidebarTooltip);
}

sidebar?.addEventListener("scroll", hideSidebarTooltip);
sidebarToggle?.addEventListener("change", hideSidebarTooltip);
railViewport.addEventListener("change", hideSidebarTooltip);
addEventListener("resize", hideSidebarTooltip);
