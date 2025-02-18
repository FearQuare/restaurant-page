export default function homePage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; 

    const about = document.createElement("div");
    about.className = "about";

    const headingAbout = document.createElement("h1");
    headingAbout.textContent = "Welcome to Fine Dining at FQ Headquarters.";

    const p1 = document.createElement("p");
    p1.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quod repellendus delectus eaque repellat, dicta unde quo amet obcaecati aliquid quisquam. Optio quod odit illum minima voluptatibus ducimus, ex nobis!";

    const p2 = document.createElement("p");
    p2.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fuga molestias nisi. Magni voluptatum numquam molestias? Ratione quam magnam, ab praesentium sed quos recusandae est expedita sint, molestiae sit perspiciatis?";

    const p3 = document.createElement("p");
    p3.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem delectus, architecto nostrum fugit rem laudantium maxime perferendis ratione nulla deleniti ab! Quasi nulla amet voluptates facilis harum tenetur neque at?";

    about.appendChild(headingAbout);
    about.appendChild(p1);
    about.appendChild(p2);
    about.appendChild(p3);

    content.appendChild(about);

    document.body.appendChild(content);
}