const baseURL = "https://Aiden-Patterson.github.io/wdd230/";
const linksURL =
  "https://aiden-patterson.github.io/wdd230/chamber/data/members.json";

async function getSpotlight() {
  const response = await fetch(linksURL);
  const data = await response.json();
  //console.log(data.members);
    let count = 0;
  let topMembers = {"members": []};
  data.members.forEach((member) => {
    if (member.membership == "Gold" || member.membership == "Silver") {
    topMembers.members[count] = member;
    count++;
    }
  });
//    console.log(topMembers);
   displaySpotlight(topMembers.members);
}


const displaySpotlight = (members) => {
    const spotlight = document.getElementById("spotlight");
    const rand1 = Math.floor(Math.random() * members.length);
    const card = document.createElement("div");
    card.className = "minicard";
    const h2 = document.createElement("h2");
    h2.textContent = members[rand1].name;
    const rank = document.createElement("p");
    rank.textContent = members[rand1].membership;
    card.appendChild(h2);
    card.appendChild(rank);
    spotlight.appendChild(card);
  
    if (members.length > 1) {
      let rand2 = Math.floor(Math.random() * members.length);
      while (rand2 == rand1) {
        rand2 = Math.floor(Math.random() * members.length);
      }
      const card = document.createElement("div");
      card.className = "minicard";
      const h2 = document.createElement("h2");
      h2.textContent = members[rand2].name;
      const rank = document.createElement("p");
      rank.textContent = members[rand2].membership;
      card.appendChild(h2);
      card.appendChild(rank);
      spotlight.appendChild(card);
    }
  };

  getSpotlight();