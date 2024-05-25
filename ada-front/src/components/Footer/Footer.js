function Footer(){
    const date = new Date();
  
    return (
      <div className="fixed-bottom mb-3 text-center">
        Créé par Emeline LECOURT le { date.toLocaleDateString() }
      </div>
    );
  }
  
  export default Footer;