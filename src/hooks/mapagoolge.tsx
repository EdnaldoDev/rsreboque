const MapaGoogle = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3445937143083!2d-49.00053972491595!3d-21.138680480538262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc1e5584d936b1%3A0x27dc9c980538971d!2sLoteamento%20-%20R.%20Prof.%20Nelson%20Pires%2C%2075%20-%20Parque%20Jos%C3%A9%20Curi%2C%20Catanduva%20-%20SP%2C%2015802-341!5e0!3m2!1spt-BR!2sbr!4v1754283006772!5m2!1spt-BR!2sbr"
        min-width="400"
        width={400}
        max-width="600" 
        height="450"
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
       </iframe>
    </div>
  );
};

export default MapaGoogle;
