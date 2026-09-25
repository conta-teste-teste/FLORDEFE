import './styles.css';

export const metadata = {
  title: 'Flor de Fé | Terços Personalizados',
  description: 'Terços personalizados feitos com delicadeza, significado e devoção.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
