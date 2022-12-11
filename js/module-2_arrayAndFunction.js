const friends = ['friend1', 'friend2', 'friend3', 'friend4', 'friend5', 'friend6', 'friend7', 'friend8', 'friend9'];
console.table(friends);

const lastIndexFriends = friends.length - 1;
console.log(lastIndexFriends);

for (let i = 0; i <= lastIndexFriends; i += 1){
    friends[i] += 33+33+"cook"+1+1*5;
    console.log(friends[i])
}