import './home.css';
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="container">
        <header class="d-flex justify-content-center py-3">
          <nav>
            <ul>
              <li>
                <Link to={`Home`}>Home</Link>
              </li>
              <li>
                <Link to={`Pricing`}>Pricing</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
    </div>
  );
}