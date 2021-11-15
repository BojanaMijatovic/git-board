import React, {useEffect, useState, useMemo} from "react";
import Repo from "./Repo";
import api from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {errorFound, resetRepo, searchValue} from "../../redux/userSlice";

const RepoList = () => {
    const selectedUser = useSelector((state) => state.updateValue.selectedUser);
    const user = useSelector((state) => state.updateValue.userName);
    const dispatch = useDispatch();
    const [ repoList, setRepoList ] = useState(null);
    let repos;


    useEffect(() => {
        async function fetchApi() {
            try {
                if(selectedUser){
                    const response = await api.get(`/users/${selectedUser}/repos`);

                    const repos = response.data;

                    setRepoList(repos);

                }
            } catch (error) {
                dispatch(errorFound());
                dispatch(searchValue(''));
                dispatch(resetRepo(''));
            }
        }

        fetchApi();

    }, [selectedUser, user]);

    if (repoList != null) {
        repos = repoList.map((repo) =>
            <Repo
                key={repo.id}
                name={repo.name}
                desc={repo.description}
                date={repo.created_at}
                link={repo.html_url}
                watchers={repo.watchers_count}
                stargazers={repo.stargazers_count}
                forks={repo.forks_count}
            />
        )
    }


    return (
        <div className="repo__list">
            {repos}
        </div>
    )
}

export default RepoList;