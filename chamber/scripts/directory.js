const baseURL = "https://Aiden-Patterson.github.io/wdd230/";
const linksURL =
  "https://aiden-patterson.github.io/wdd230/chamber/data/members.json";
const unorderedList = document.getElementById("members");

async function getMembers() {
  const response = await fetch(linksURL);
  const data = await response.json();
  //console.log(data.members);
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    const item = document.createElement("div");
    item.className = "card";
    const name = document.createElement("h2");
    name.textContent = member.name;
    item.appendChild(name);

    const address = document.createElement("p");
    address.textContent = member.address;
    item.appendChild(address);

    const phone = document.createElement("p");
    phone.textContent = member.phone;
    item.appendChild(phone);

    const website = document.createElement("a");
    website.setAttribute("href", member.website);
    website.setAttribute("alt", member.name + " website");
    item.appendChild(website);

    const membership = document.createElement("p");
    membership.textContent = "Membership Status: " + member.membership;
    item.appendChild(membership);

    const icon = document.createElement("img");
    icon.setAttribute("src", baseURL + member.icon_file_name);
    item.appendChild(icon);
    unorderedList.appendChild(item);
  });
};


getMembers();
