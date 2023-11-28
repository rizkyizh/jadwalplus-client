class Register extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container">
      <div class="form-box">
        <div class="form-head">
        <img src="/image/task1.png" alt="Task Icon" id="taskIcon" />
          <h1>JadwalPlus</h1>
        </div>
        <h1 id="title">Daftar ke JadwalPlus</h1>
        <form>
          <div class="input-group">
            <div class="input-field">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Nama pengguna" />
            </div>
            <div class="input-field" id="emailField">
              <i class="fa-solid fa-envelope"></i>
              <input type="text" placeholder="Email pengguna" />
            </div>
            <div class="input-field">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" id="myPassword" />
              <!-- <input type="checkbox" onclick="myFunction()"> -->
            </div>
          </div>
          <div id="signInContainer" class="signContainer">
            <button type="button" id="signinBtn" class="signBtn">Daftar</button>
            <p>Sudah memiliki akun?<a href="#" id="signUpLink">Masuk</a></p>
          </div>
          <div id="signUpContainer" class="signContainer">
            <button type="button" id="signupBtn" class="signBtn">Masuk</button>
            <p>Belum memiliki akun?<a href="#" id="signInLink">Daftar</a></p>
          </div>
        </form>
      </div>
    </div>
    `;
  }
}

customElements.define('register-page', Register);
