.gridSection {
  padding: 48px 40px;
  background: white;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 28px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .gridSection {
    padding: 32px 20px;
  }

  .grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .gridSection {
    padding: 24px 16px;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
