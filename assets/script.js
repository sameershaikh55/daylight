const sidebar = document.getElementById("sideBarId");
document.getElementById("hambergerBtn").addEventListener("click", () => {
	sidebar.style.display = "block";
	sidebar.style.opacity = "1";
	sidebar.style.top = "0%";
	sidebar.style.left = "0%";
	sidebar.style.transform = "none";
});

const closeSidebar = () => {
	sidebar.style.display = "none";
	sidebar.style.opacity = "0";
	sidebar.style.transition = "1s all";
};


const c1 = document.getElementById("content-1");
const c2 = document.getElementById("content-2");
const t1 = document.getElementById("tab-1");
const t2 = document.getElementById("tab-2");

t1.addEventListener("click", () => {
	t1.classList.add("active");
	t2.classList.remove("active");
	c2.style.display = "none";
	c1.style.display = "flex";
});

t2.addEventListener("click", () => {
	t2.classList.add("active");
	t1.classList.remove("active");
	c1.style.display = "none";
	c2.style.display = "flex";
});

