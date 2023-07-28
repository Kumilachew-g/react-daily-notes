function Footer() {
  return (
    <div>
      <p
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Copyright &copy; {new Date().getFullYear()} Kumilachew Getie
      </p>
    </div>
  );
}

export default Footer;
