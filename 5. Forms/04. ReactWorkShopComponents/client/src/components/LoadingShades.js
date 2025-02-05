import * as Errors from "./Errors";

export default function LoadingShades({
    isWaitingFetch,
    isFoundUsers,
    isFailedToFetch,
    isAnyUsers,
}) {
  return (
    <div className="loading-shade">
      {/* Loading spinner  */}
      {isWaitingFetch && <div className="spinner"></div>}

      {/* No users added yet  */}

      {!isAnyUsers && <Errors.NoUsers />}

      {/* No content overlap component  */}

      {!isFoundUsers && <Errors.NoSearchContent />}

      {/* On error overlap component  */}

      {isFailedToFetch && <Errors.FailedToFetch />}
    </div>
  );
}
