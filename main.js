import {
  dataProjek,
  dataSerti,
  dataTech,
  dataEdu,
  DataExperience,
} from "./src/jsObjeck/objeck.js";

const sideBar = document.querySelector(".side-bar");
const showSidebar = document.getElementById("sidebar");
const closeSidebar = document.querySelector(".close");
const btn = document.querySelector(".btn");
const icon = document.getElementById("icon");
const html = document.body;
const projek = document.getElementById("project");
const certifikasi = document.getElementById("certificate");
const tech = document.getElementById("tech");
const btnSwitch = document.querySelector(".btn-switch ");
const allContain = document.querySelectorAll(".content");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
const downloadCv = document.getElementById("download-cv");

downloadCv.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "./src/img/cv/Bilal al tintop..pdf";
  link.download = "Bilal_al_tintop_vc.pdf";
  link.click();
});

function createProjek() {
  const neDivTitle = document.createElement("div");
  neDivTitle.classList.add("text-center");
  neDivTitle.innerHTML = `
  <h1 class="font-bold text-2xl">Projek</h1>
  `;
  projek.append(neDivTitle);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add(
    "p-4",
    "mt-4",
    "grid",
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-2",
    "xl:grid-cols-4",
    "gap-7"
  );

  dataProjek.forEach((data) => {
    const techData = data.tech
      .map(
        (tech) =>
          `<div class="p-2 font-semibold text-sm text-center bg-blue-400 rounded-md text-white hover:shadow-[0_0_10px_blue]">${tech}</div>`
      )
      .join("");

    const card = document.createElement("div");
    card.className =
      "bg-white dark:bg-gray-700 w-full mx-auto p-3 md:w-80 md:h-125 md:m-5 md:p-5 text-black dark:text-white rounded-md";

    card.innerHTML = `
    <div class="h-48">
      <img class="w-full h-full object-cover rounded-2xl"
           src="./src/img/projeck-img/${data.image}"
           alt="${data.namaProjek}">
    </div>
    <div class="mt-2 text-center">
      <h6 class="font-bold text-xl md:text-2xl text-gray-800 dark:text-white underline">${data.namaProjek}</h6>
    </div>
    <div class="mt-1 text-justify">
      <p class="text-sm md:text-sm font-light">${data.descrption}</p>
    </div>
    <div class="grid grid-cols-3 gap-2 mt-3">
      ${techData}
    </div>
  `;
    gridContainer.append(card);
  });

  projek.append(gridContainer);
}

function cretaeSerti() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("text-center");
  newDiv.innerHTML = `
  <h1 class="font-bold text-2xl">Sertifikat</h1>
  `;
  certifikasi.append(newDiv);

  const gridDiv = document.createElement("div");
  gridDiv.className =
    "p-4 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10";
  dataSerti.map((datas) => {
    const card = document.createElement("div");
    card.className =
      "p-3 w-full mx-auto h-auto lg:w-96 lg:h-60 md:w-90 md:h-60 xl:w-100 rounded-md";
    card.innerHTML = `
        <div class="h-56">
            <img class="w-full h-full object-cover rounded-2xl" src="./src/img/serti-img/${datas.image}" alt="blm ada gambar">
        </div>
    `;
    gridDiv.append(card);
  });
  certifikasi.append(gridDiv);
}

function creteTech() {
  const newDivTitle = document.createElement("div");
  newDivTitle.classList.add("text-center", "mb-2");
  newDivTitle.innerHTML = `<h1 class="font-bold text-2xl">Teknologi</h1>`;
  tech.append(newDivTitle);

  const newDiv = document.createElement("div");
  const classTech =
    "p-4 mt-4 grid grid-cols-3 md:justify-center md:items-center md:flex  gap-2";
  newDiv.className = classTech;
  dataTech.map((data) => {
    const techs = document.createElement("div");
    techs.className =
      "bg-white p-1 text-black dark:bg-black dark:text-white w-20 h-20 rounded-sm";
    techs.innerHTML = `
        <img class="p-1 w-full h-full object-cover " src="../src/img/tech-img/${data.tech}" alt="">
    `;
    newDiv.append(techs);
  });
  tech.append(newDiv);
}

btnSwitch.addEventListener("click", function (e) {
  let data = e.target.dataset.target;
  if (e.target.classList.contains("btn")) {
    allContain.forEach((m) => {
      if ("#" + m.id === data) {
        m.classList.remove("hidden");
      } else {
        m.classList.add("hidden");
      }
    });
  }
});

function createEducation() {
  const newDivTitle = document.createElement("div");
  const clsTitle = "text-center mt-1.5 mb-5";
  newDivTitle.className = clsTitle;
  newDivTitle.innerHTML = `<h1 class="text-2xl font-bold">Education</h1>`;
  education.append(newDivTitle);

  const newDivGRid = document.createElement("div");
  const clasGrid =
    "md:justify-center md:items-center p-1 md:flex grid grid-cols-1 gap-5";
  newDivGRid.className = clasGrid;
  dataEdu.map((item) => {
    const cardEdu = document.createElement("div");
    const clasCrad =
      "bg-white text-black mb-3 w-80 h-50 md:w-125 rounded-sm border-4 border-blue-50 ";
    cardEdu.className = clasCrad;
    cardEdu.innerHTML = ` 
    <div class="text-center">
      <div class="flex justify-between items-center m-1 px-5 md:px-10">
          <div class="flex flex-col">
              <h1 class="text-md font-bold">${item.namaSekolah}</h1>
              <h1 class="text-sm">${item.jurusan}</h1>
          </div>
          <img class="p-2 h-20 w-20 rounded-full text-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg/2048px-Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.png" alt="Blm ada gambar">
      </div>
      <div class="bg-black p-1 px-5 md:px-10">
          <h1 class="text-start font-medium text-white">${item.tahun}</h1>
      </div>
      <div class="p-1 text-start mt-2 px-5 md:px-10">
          <h1>Nilai Rata-Rata : </h1>
      </div>
  </div>
    `;
    newDivGRid.append(cardEdu);
  });
  education.append(newDivGRid);
}

function experiences() {
  const newDivTitle = document.createElement("div");
  const classDivTitel = "text-center";
  newDivTitle.className = classDivTitel;
  newDivTitle.innerHTML = ` <h1 class="font-bold text-2xl mb-10">Experience</h1>`;
  experience.append(newDivTitle);

  const gridExperiences = document.createElement("div");
  const gridClass = "grid md:grid-cols-2 gap-2  grid-cols-1 place-items-center";
  gridExperiences.className = gridClass;

  DataExperience.map((data) => {
    const kegiatans = data.kegiatan
      .map((datas) => `<li>${datas}</li>`)
      .join("");
    const cardDiv = document.createElement("div");
    const classCard =
      "bg-white text-black dark:bg-gray-700 dark:text-white w-80 h-80 md:w-150 md:h-90 p-2 mt-1 rounded-sm";
    cardDiv.className = classCard;
    cardDiv.innerHTML = `
      <div class="p-1">
          <div class="flex justify-between items-center">
              <div class="px-3">
                  <h1 class="text-sm md:text-2xl font-bold text-gray-500 dark:text-white">${data.judul}</h1>
                  <h1 class="text-center text-sm font-light dark:text-blue-300">${data.subJudul}</h1>
              </div>
              <div class="border-2 rounded-4xl p-2">
                  <h1 class="text-black text-sm dark:text-white">${data.tahun}</h1>
              </div>
          </div>
          <div class="p-1 mt-2 border-b-4 border-b-black dark:border-b-blue-400"></div>
          <div class="mt-2 p-2">
              <h1 class="text-sm md:text-xl font-semibold">${data.title}</h1>
              <ul class="list-disc px-10 text-sm mt-2">
                  ${kegiatans}
              </ul>
          </div>
      </div>  
    `;
    gridExperiences.append(cardDiv);
  });

  experience.append(gridExperiences);
}

btn.addEventListener("click", function () {
  if (html.classList.contains("dark")) {
    icon.classList.replace("fa-sun", "fa-moon");
    html.classList.toggle("dark");
  } else {
    html.classList.toggle("dark");
    icon.classList.replace("fa-moon", "fa-sun");
  }
});

sideBar.addEventListener("click", function () {
  showSidebar.classList.remove("hidden");
});

closeSidebar.addEventListener("click", function () {
  showSidebar.classList.add("hidden");
});

function renderAllSection() {
  createEducation();
  cretaeSerti();
  createProjek();
  creteTech();
  experiences();
}

renderAllSection();
