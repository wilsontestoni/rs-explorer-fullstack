export class GithubUser {
  static async getUser(userlogin) {
    const endPoint = `https://api.github.com/users/${userlogin}`;
    const data = await fetch(endPoint);
    const { login, name, public_repos, followers } = await data.json();

    return {
      login,
      name,
      public_repos,
      followers,
    };
  }
}
