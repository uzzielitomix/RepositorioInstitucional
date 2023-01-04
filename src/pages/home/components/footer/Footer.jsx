import "./Footer.css";

export default function Footer() {
  return (
    
    <div className="container">
  <div className="content"></div>
  <footer className="row">
    <div className="sozial col-xs-12 col-sm-6 col-sm-push-6">
      <ul className="row">
        <li className="col-xs-6 col-sm-2">
          <a href="#">
            <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png"/></a>
        </li>
        <li className="col-xs-6 col-sm-2">
          <a href="#">
            <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"/></a>
        </li>
        <li className="col-xs-6 col-sm-2">
          <a href="#">
            <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png"/></a>
        </li>
        <li className="col-xs-6 col-sm-2">
          <a href="#">
            <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_google_plus-128.png"/></a>
        </li>
      </ul>
    </div>

    
    <div className="copyright col-xs-12 col-sm-3 col-sm-pull-6">
      <p> &copy; Me from now to eternity </p>
    </div> Ende Copyright 
    
    <div className="impressum col-xs-12 col-sm-3 col-sm-pull-6">
      <p> An impressive impressum </p>
      <p> Adresse und so </p>
    </div> Ende Impressum
  </footer>
</div> 
    
  );
}
