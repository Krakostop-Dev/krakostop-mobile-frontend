import checkStringPattern from './SearchHelper';

function isSearchingByPairNr(search) {
  // eslint-disable-next-line no-restricted-globals
  return !isNaN(search);
}

function mapPairsToUsersWithRanking(participants) {
  return participants.reduce((r, e) => {
    r.push(
      { ...e.pair.users[0], ranking: e.ranking },
      { ...e.pair.users[1], ranking: e.ranking }
    );
    return r;
  }, []);
}

function searchByPairNr(searchPattern, users) {
  return users.filter(user => {
    return user.pair_id.toString().search(searchPattern) !== -1;
  });
}

function isDoubleMatch(firstNamePatternPos, lastNamePatternPos) {
  return firstNamePatternPos !== -1 && lastNamePatternPos !== -1;
}

function searchByName(searchPattern, users) {
  const filteredUsers = users.reduce((r, user) => {
    const firstNamePatternPos = checkStringPattern(
      user.first_name,
      searchPattern
    );
    const lastNamePatternPos = checkStringPattern(
      user.last_name,
      searchPattern
    );
    if (isDoubleMatch(firstNamePatternPos, lastNamePatternPos)) {
      const resultPatternPos =
        firstNamePatternPos < lastNamePatternPos
          ? firstNamePatternPos
          : lastNamePatternPos;
      r.push({
        ...user,
        patternPos: resultPatternPos,
      });
    } else if (firstNamePatternPos !== -1) {
      r.push({
        ...user,
        patternPos: firstNamePatternPos,
      });
    } else if (lastNamePatternPos !== -1)
      r.push({
        ...user,
        patternPos: lastNamePatternPos,
      });
    return r;
  }, []);

  return filteredUsers.sort((first, second) => {
    return first.patternPos - second.patternPos;
  });
}

function searchParticipants(searchPattern, participants) {
  const users = mapPairsToUsersWithRanking(participants);
  if (isSearchingByPairNr(searchPattern) && searchPattern.length > 0) {
    return searchByPairNr(searchPattern, users);
  }
  if (searchPattern.length > 2) {
    return searchByName(searchPattern, users);
  }
  return null;
}
export default searchParticipants;
