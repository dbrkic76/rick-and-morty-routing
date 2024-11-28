export const Pagination = ({ page, setPage }) => {
  let pageArr = [1, 2, 3, 4, 5];
  if (page > 3 && page < 40) {
    pageArr = [page - 2, page - 1, page, page + 1, page + 2];
  } else if (page >= 40) {
    pageArr = [38, 39, 40, 41, 42];
  }
  return (
    <div>
      {pageArr.map((e) => {
        return (
          <button
            className={e === page ? "active-page" : ""}
            onClick={() => {
              setPage(e);
            }}>
            {e}
          </button>
        );
      })}
    </div>
  );
};
