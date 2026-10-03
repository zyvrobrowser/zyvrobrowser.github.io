const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '×' : '☰';
});

nav.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const DOWNLOADS = {
  windows: 'https://github.com/SyntaxError-TwT/Zyvro-Browser/releases/download/Models/ZyvroSetup.exe',
  mac: 'https://github.com/SyntaxError-TwT/Zyvro-Browser/releases/download/Models/Zyvro-1.0.0-macOS-arm64.dmg'
};

const platformName = (navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || '').toLowerCase();
const isMac = platformName.includes('mac');
const detectedName = isMac ? 'macOS · Apple silicon' : 'Windows 64-bit';
const downloadLabel = isMac ? 'Download for macOS' : 'Download for Windows';
const lowerDownloadLabel = isMac ? 'Download macOS DMG' : 'Download Windows installer';
const downloadUrl = isMac ? DOWNLOADS.mac : DOWNLOADS.windows;

document.querySelectorAll('.platform-download').forEach((link) => {
  link.href = downloadUrl;
});
document.querySelectorAll('.button-label').forEach((label) => {
  label.textContent = downloadLabel;
});
document.querySelectorAll('.download-main-label').forEach((label) => {
  label.textContent = lowerDownloadLabel;
});
document.querySelectorAll('.detected-label').forEach((label) => {
  label.textContent = detectedName;
});
