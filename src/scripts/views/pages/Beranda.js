import '../components/Navbar';
import '../components/Navigation';
import '../components/HeroBeranda';

class Beranda extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    //  localStorage
    const jadwalData = JSON.parse(localStorage.getItem('jadwalData')) || [];

    this.innerHTML = '';

    const navbar = document.createElement('navbar-app');
    const heroberanda = document.createElement('heroberanda-app');
    const navigation = document.createElement('navigation-app');

    this.appendChild(navbar);
    this.appendChild(heroberanda);
    this.appendChild(navigation);

    const jadwalContainer = document.createElement('div');

    // eslint-disable-next-line no-plusplus
    for (let i = jadwalData.length - 1; i >= 0; i--) {
      const jadwalElement = this.createJadwalElement(jadwalData[i], i);
      jadwalContainer.appendChild(jadwalElement);
    }

    // tombol delete
    const deleteButtons = jadwalContainer.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => this.handleDelete(event));
    });
    this.appendChild(jadwalContainer);

    this.classList.add('min-height-100');
  }

  // eslint-disable-next-line class-methods-use-this
  createJadwalElement(data, index) {
    const jadwalElement = document.createElement('div');
    jadwalElement.classList.add('kotak-jadwal1'); // tambahkan kelas kotak-jadwal
    jadwalElement.innerHTML = `
      <div class="jadwal-info">
        <p>Judul: ${data.judul}</p>
        <p>Tanggal: ${data.tanggal}</p>
        <p>Keterangan: ${data.keterangan}</p>
        <button class="delete-button" data-index="${index}">Delete</button>
      </div>
    `;
    return jadwalElement;
  }

  handleDelete(event) {
    const index = event.target.getAttribute('data-index');
    // eslint-disable-next-line no-restricted-globals, no-alert
    if (confirm('Apakah Anda yakin ingin menghapus jadwal ini?')) {
      // Hapus data dari localStorage
      const jadwalData = JSON.parse(localStorage.getItem('jadwalData')) || [];
      jadwalData.splice(index, 1);
      localStorage.setItem('jadwalData', JSON.stringify(jadwalData));
      this.render();
    }
  }
}

customElements.define('beranda-page', Beranda);
