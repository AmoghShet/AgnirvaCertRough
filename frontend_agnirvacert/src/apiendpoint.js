const baseurl = "http://localhost:8081"

export const endpoints = {
    verifyCertificate : {
        ExpeditionCompletionCertificate: `${baseurl}/api/v1/ExpeditionCompletionCertificate/`,
        ExpeditionParticipationCertificate : `${baseurl}/api/v1/ExpeditionParticipationCertificate/`,
        FellowshipCompletionCertificate: `${baseurl}/api/v1/FellowshipCompletionCertificate/`,
        ExplorerCertificate: `${baseurl}/api/v1/ExplorerCertificate/`,
        FellowshipCommenceCertificate: `${baseurl}/api/v1/FellowshipCommenceCertificate/`
    }
}