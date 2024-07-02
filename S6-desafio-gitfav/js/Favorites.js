import { GithubUser } from "./GithubUser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("github-favorites")) || [];
  }

  save() {
    localStorage.setItem("github-favorites", JSON.stringify(this.entries));
  }

  async addUser(userlogin) {
    try {
      const userExists = this.entries.find((user) => user.login === userlogin);

      if (userExists) {
        throw new Error("Usuário já está na lista!");
      }

      const user = await GithubUser.getUser(userlogin);

      if (user.login == undefined) {
        throw new Error("Usuário não existe!");
      }

      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error);
    }
  }

  removeUser(userlogin) {
    const filteredEntries = this.entries.filter(
      (user) => user.login != userlogin
    );
    this.entries = filteredEntries;
    this.save();
    window.location.reload();
  }
}

export class FavoritesUi extends Favorites {
  constructor(root) {
    super(root);
    this.tbody = this.root.querySelector("table tbody");
    this.update();
    this.onSearchButtonHover();
    this.onAdd();
  }

  onAdd() {
    const searchButton = this.root.querySelector(".search button");

    searchButton.addEventListener("click", () => {
      const input = this.root.querySelector(".search #input-search");
      const userlogin = input.value.trim();

      this.addUser(userlogin);
    });
  }

  onSearchButtonHover() {
    const searchButton = this.root.querySelector(".search button");
    searchButton.addEventListener("mouseover", () => {
      searchButton.style.backgroundColor = "#fff";
      searchButton.style.color = "#065E7C";
      searchButton.querySelector("img").src = "../assets/white-star.svg";
    });

    searchButton.addEventListener("mouseout", () => {
      searchButton.style.backgroundColor = "#065E7C";
      searchButton.style.color = "#fff";
      searchButton.querySelector("img").src = "../assets/star.svg";
    });
  }

  update() {
    const hasNoFavorites = this.entries.length === 0;
    if (hasNoFavorites) {
      const noFavoritesRow = this.noFavorites();
      this.tbody.append(noFavoritesRow);
      return;
    }

    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.addRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(".user img").alt = `Avatar do usuário ${user.name}`;
      row.querySelector(".user a").href = `https://github.com/${user.login}`;
      row.querySelector(".user p").textContent = `${user.name}`;
      row.querySelector(".user span").textContent = `/${user.login}`;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").addEventListener("click", () => {
        const unfavorite = confirm("Você realmente deseja desfavoritar?");

        if (unfavorite) {
          this.removeUser(user.login);
        }
      });

      this.tbody.append(row);
    });
  }

  noFavorites() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td colspan="4">
        <div class="empty-repositories">
          <img src="assets/empty-star.svg" alt="">
          <p>Nenhum favorito ainda</p>
        </div>
      </td>
    `;

    return tr;
  }

  addRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="user">
        <img src="assets/imagem-test.png" alt="" />
        <a href="https://github.com/wilsontestoni" target="_blank">
          <p href="#">Wilson Testoni</p>
          <span>/wilsontestoni</span>
        </a>
      </td>
      <td class="repositories">123</td>
      <td class="followers">1234</td>
      <td>
        <button class="remove">Remover</button>
      </td>
  `;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => tr.remove());
  }
}
