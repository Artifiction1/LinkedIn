
import "../CssStyles/LeftSideBarCardProfile.css"

const LeftSideBarCardProfile = ({profile}) => {
  return (
    <>
      <section className="home-my-profile-card mt-3">
        <div className="hero"></div>
        
        <div className="img-holder">
          <img
            className="avatar rounded-circle"
            src={profile.image}
            alt=" "
          />
        </div>
        

        <h6 className="text-center my-name">{profile.name}{" "}{profile.surname}</h6>
        <p className="text-center my-title border-bottom pb-3">{profile.title}</p>
        <div className="views d-flex flex-column px-3 border-bottom mt-3">
          <div className="views-one d-flex justify-content-between">
            <p>Who viewed your profile</p>
            <span>62</span>
          </div>
          <div className="views-two d-flex justify-content-between mt-2 mb-3">
            <p>Views of your post</p>
            <span>108</span>
          </div>
        </div>
        <p className="p-3 my-items">
          <i className="fas fa-bookmark mr-2"></i>
          My Items
        </p>
      </section>
    </>
  );
};

export default LeftSideBarCardProfile;