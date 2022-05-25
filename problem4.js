const friendArray = ['bilai', 'bilaichana', 'billu','mekur'];

  function oddFriend(friendArray) {
    if (friendArray.length % 2 != 0) {
      return friendArray;
    }
  }
  const myFriend = friendArray.filter(oddFriend);
  console.log(myFriend);