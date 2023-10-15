import { useHistory } from "react-router-dom";
import SquadCard from "components/MySquad/SquadCard/index.js";
import MemberCard from "components/Community/Card/MemberCard";

function MembersList({ category, members, hideStats }) {
  const history = useHistory();
  if (members?.length > 0)
    return (
      <div className="space-y-2.5">
        <h1 className="text-xs px-2 font-inter font-semibold leading-4 text-primary-gray-1000 pb-2.5 border-b border-primary-gray-100 w-full">
          {category} ({members?.length || 0})
        </h1>
        <div className="flex flex-col w-full space-y-3 bg-primary-gray-50 rounded-lg py-3 px-2">
          {members.map((person) => {
            return (
              <MemberCard
                hideStats={hideStats}
                item={person}
                onSelect={() => {
                  history.push({
                    pathname: `/squadUser/${person?.id}`,
                    state: { user: person },
                  });
                }}
              />
            );
          })}
        </div>
      </div>
    );

  return <></>;
}

export default MembersList;
