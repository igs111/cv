@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background: linear-gradient(120deg, #ffffff, #f3f0ff, #ffffff);
  background-size: 300% 300%;
  animation: bgMove 12s ease infinite;
  color: #222;
  overflow-x: hidden;
}

/* ANIMOWANE TŁO */
@keyframes bgMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* STICKY MENU */
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background: rgba(75, 43, 189, 0.95);
  padding: 15px 0;
  display: flex;
  justify-content: center;
  gap: 40px;
  z-index: 999;
  backdrop-filter: blur(6px);
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  transition: opacity .3s;
}

.navbar a:hover {
  opacity: 0.7;
}

/* HEADER + FALA */
header {
  background: #4b2bbd;
  color: white;
  text-align: center;
  padding: 50px 20px 80px;
  position: relative;
  font-size: 1.8em;
  letter-spacing: 2px;
}

.wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 80px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="%23ffffff" d="M0,224L1440,96L1440,320L0,320Z"></path></svg>');
  background-size: cover;
}

/* ANIMACJE SCROLLOWE */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.9s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
