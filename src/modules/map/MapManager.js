function navigateToLocation(mapRef, { latitude, longitude }) {
  if (mapRef) {
    mapRef.animateCamera(
      { center: { latitude, longitude } },
      { duration: 1000 }
    );
  }
}

export default navigateToLocation;
