import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div class="container">
          <a href="index.html" class="navbar-brand">
            SkyNet
          </a>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#home" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#section-one-head" class="nav-link">
                  Section 1
                </a>
              </li>
              <li class="nav-item">
                <a href="#section-two-head" class="nav-link">
                  Section 2
                </a>
              </li>
              <li class="nav-item">
                <a href="#section-three-head" class="nav-link">
                  Section 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
