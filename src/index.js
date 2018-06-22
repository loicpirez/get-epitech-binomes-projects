import getAllActivitiesWithBinomesFromIntra from './get-informations-from-intra'

(async function () {
  const authToken = process.env.EPITECH_AUTH_TOKEN
  const email = process.env.EPITECH_EMAIL

  if (authToken === undefined || email === undefined) {
    throw new Error(
      'EPITECH_AUTH_TOKEN or EPITECH_EMAIL is not defined in environement.'
    )
  } else {
    const activities = await getAllActivitiesWithBinomesFromIntra(authToken, email)
    console.log(JSON.stringify(activities, null, 2))
  }
})().catch(error => console.error(error.message))
