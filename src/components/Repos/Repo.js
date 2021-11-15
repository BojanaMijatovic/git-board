import React from "react";

const Repo = ({ name, date, desc, link, watchers, stargazers, forks }) => {
    return (
        <div className="repo__wrapper">
            <h3 className="repo__name">{name}</h3>
            <span className="repo__date">{date}</span>
            {desc ? <p className="repo__description">{desc.substring(0, 60)}...</p> : ''}
            <div className="repo__stats">
                <p className="repo__icon repo__watchers">{watchers}</p>
                <p className="repo__icon repo__stargazers">{stargazers}</p>
                <p className="repo__icon repo__forks">{forks}</p>
            </div>
            <a className="repo__link" target="_blank" href={link}>Open in new tab</a>
        </div>
    )
}

export default Repo;