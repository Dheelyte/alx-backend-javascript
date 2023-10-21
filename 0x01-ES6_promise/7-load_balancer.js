export default async loadBalancer(chinaDownload, USDownload) {
  return Promise
  .race([chinaDownload, USDownload])
  .then((res) => res);
}
