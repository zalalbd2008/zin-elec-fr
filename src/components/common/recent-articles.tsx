import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '400', '500', '600'],
});





async function RecentArticles() {
  return (
    <div>
      <h3 className={`text-lg ${poppins.className}`}>
        Recent articles
      </h3>
    </div>
  );
}

export default RecentArticles;
