import React from "react";
import "./style/MyBusiness.css";

const MyBusiness = () => {
  const sections = [
    { 
      id: "business", 
      title: "Business", 
      subtitle: "Your company's identity and mission.", 
      bgImage: "/images/mybiz1.png" 
    },
    { 
      id: "about", 
      title: "About", 
      subtitle: "A brief overview of your organization.", 
      bgImage: "/images/mybiz2.png" 
    },
    { 
      id: "services", 
      title: "Services", 
      subtitle: "What you offer to your customers.", 
      bgImage: "/images/mybiz3.png"  
    },
    { 
      id: "team", 
      title: "Team Members", 
      subtitle: "Meet the people behind the magic.", 
      bgImage: "/images/mybiz4.png" 
    },
    { 
      id: "find-us", 
      title: "Find Us Online", 
      subtitle: "Stay connected with us online.", 
      bgImage: "/images/mybiz5.png" 
    },
  ];

  return (
    <div className="my-business">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">The BUSINESS</h1>
      </div>

      {/* Subhero Section */}
      <div className="subhero">
        <h2 className="subhero-text">
          Your 9-5 Kingdom... Or 8-to-Eternity, We Don't Judge
        </h2>
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            <button>{section.title.toUpperCase()}</button>
          </a>
        ))}
      </div>

      {/* Content Sections */}
      <div className="content-sections">
        {sections.map((section) => (
          <div
            id={section.id}
            className="content-card"
            key={section.id}
            style={{
              backgroundImage: `url(${section.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBusiness;
