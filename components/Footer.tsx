import "./styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>Pawsome Delights</h4>
          <p>Healthy treats, happier tails.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Catalog</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <h4>About</h4>
          <a href="#">Our Mission</a>
          <a href="#">Community</a>
          <a href="#">Impact</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Pawsome Delights. All rights reserved.
      </div>
    </footer>
  );
}
