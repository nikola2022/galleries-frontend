
export const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
      const data = await response.json();
      console.log(data)
      return data;
    } catch (e) {
      console.log(e);
    }
  };