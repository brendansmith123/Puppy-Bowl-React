const COHORT = "2401-FTB-WEB-AM";
const URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${URL}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function addNewPlayer(newPlayer) {
  try {
    const response = await fetch(`${URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create new player");
  }
}
export async function deletePlayer(playerId) {
  try {
    const response = await fetch(`${URL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete player");
  }
}
export async function fetchPlayerById(playerId) {
  try {
    const response = await fetch(`${URL}/players/${playerId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch player details");
  }
}
export async function fetchPlayerDetails(playerId) {
  try {
    const response = await fetch(`${URL}/players/${playerId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch player details");
  }
}
