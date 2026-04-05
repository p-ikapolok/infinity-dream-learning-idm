let reviews: any[] = [];

export function addReview(r: any) {
  reviews.push(r);
}

export function getReviews() {
  return reviews;
}