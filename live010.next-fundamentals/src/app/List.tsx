const getVehicles = async () => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  return ['RS5', 'A6', 'Q7'];
};

export const List = async () => {

  const vehicles = await getVehicles();

  return (
    <section>
      <h2>Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle}>{vehicle}</li>
        ))}
      </ul>
    </section>
  )
}

export default List;