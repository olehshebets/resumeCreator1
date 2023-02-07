import React from "react";

const Resume = ({ person, repos }) => {
  const {
    html_url,
    avatar_url,
    name, login,
    email,
    organizations_url,
    bio,
    company,
    blog,
    created_at,
    location,
    followers,
    public_repos,
  } = person;

  const lastThreeRepos = repos.length >= 3 && repos.slice(0, 3);
  const dataCreatedAt = created_at.split('T')[0]
  console.log(dataCreatedAt)  
  return (
    <div id="inner" className="vcard">

    <header>
      <div className="yui-gc">
        <div className="yui-u first">
          <h1 className="fn">{name}</h1>
          <h2>{`@${login}`}</h2>
        </div>

        <div className="yui-u">
          <div className="contact-info">
            <img src={avatar_url} alt="avatar" className="photo" />
           <h3>
            <a href={`mailto:${email}`} className="email">
              {email}
            </a>
            <h3>Joined on: {dataCreatedAt}</h3>
            <h3>Based in: {location}</h3>
            <h3>Followers: {followers}</h3>
            <h3>Has a {public_repos} public repositories</h3>
          </h3>
          </div>
        </div>
      </div>
    </header>

    <article>
      <div id="yui-main">
        <div className="yui-b">

          <div id="profile" className="yui-gf">
            <div className="yui-u first">
              <h2>GitHub Profile</h2>
            </div>
            <div className="yui-u">
              <p className="enlarge">
                <a href={html_url}>
                  {html_url}
                </a>
              </p>
            </div>
          </div>
          {bio && (
            <div className="yui-gf" id="mywebsite">
              <div className="yui-u first">
                <h2>Bio</h2>
              </div>
              <div className="yui-u" id="content-website">
                  {bio}
              </div>
            </div>
          )}
          {company && (
            <div className="yui-gf" id="company">
              <div className="yui-u first">
                  <h2>Company</h2>
              </div>
              <div className="yui-u" id="content-languages">
                {company}
              </div>
            </div>
          )}
          {email && (
            <div className="yui-gf" id="email">
              <div className="yui-u first">
                  <h2>Email</h2>
              </div>
              <div className="yui-u" id="content-languages">
                {email}
              </div>
            </div>
          )}
          {repos && (
            <div id="repositories" className="yui-gf">
              <div className="yui-u first">
                <h2>Latest Repositories</h2>
              </div>
          
              <div className="yui-u" id="jobs">
                {lastThreeRepos.map((rep) => (
                   <div
                    className="yui-u"
                    key={rep.id}
                   >
                     <p className="enlarge">
                       <a href={rep.clone_url}>
                         {rep.clone_url}
                       </a>
                     </p>
                    <div className="yui-u" id="content-languages">
                      {rep.description}
                    </div>
                   </div>
                ))
                }
              </div>
          </div>
          )}

          {blog && (
            <div id="contributions" className="yui-gf">
            <div className="yui-u first">
              <h2>Blog</h2>
            </div>

            <div className="yui-u" id="contrib-jobs">
              <span>{blog}</span>
            </div>
          </div>
          )}

          <div className="yui-gf" id="organizations">
            <div className="yui-u first">
              <h2>Organizations</h2>
            </div>

            <div className="yui-u" id="orgs">
            {organizations_url
                ? <a href={organizations_url}>
                  {organizations_url}
                  </a>
                : <h1>Loading information</h1>
              }
            </div>
          </div>

          <div id="about" className="yui-gf last">
            <div className="yui-u first">
              <h2>About This R&eacute;sum&eacute;</h2>
            </div>
            <div className="yui-u">
              <p className="enlarge">
                This r&eacute;sum&eacute; is generated automatically using public information from the developer's GitHub account. The repositories are
                ordered by popularity based on a very simple popularity heuristic that defines the popularity of a repository
                by its sum of watchers and forks. Do not hesitate to visit <a href="https://github.com/{{{username}}}" title="{{name}}'s GitHub page">s GitHub page</a>
                for a complete work history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>

    <footer>
    </footer>

  </div>
  )
}

export default Resume;
