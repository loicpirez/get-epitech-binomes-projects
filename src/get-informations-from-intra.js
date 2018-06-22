import Intranet from 'intra-api'

const getActivities = (data) => {
  const activities = []

  Object.keys(data.binomes).forEach(project => {
    data.binomes[project].activities.split(',').forEach(activity => activities.push(activity))
  })
  return Array.from(new Set(activities)).sort()
}

async function getAllActivitiesWithBinomesFromIntra (authToken, email) {
  return new Promise(
    await function (resolve, reject) {
      const intra = new Intranet(authToken, email)
      intra.fetch(`/user/${email}/binome/?format=json`)
        .then(binomes => resolve(getActivities(binomes)))
    }
  )
}

export default getAllActivitiesWithBinomesFromIntra
