import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

export default function GraphqlDemo1() {
    const { data, loading, error } = useQuery(FILMS_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    const launchList = data.launchesPast.map((launch) => (
        // <pre key={launch.id}>{JSON.stringify(launch)}</pre>
        <li key={launch.id}>{launch.mission_name}</li>
    ));

    return (
        <div>
            <h4>SpaceX Launches</h4>
            <ul>{launchList}</ul>
        </div>
    );
}

