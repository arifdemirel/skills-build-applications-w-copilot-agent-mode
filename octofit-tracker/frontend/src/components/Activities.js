import React, { useEffect, useState } from 'react';

function Activities() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const endpoint = `https://${codespace}-8000.app.github.dev/api/activities/`;
    console.log('[Activities] Fetching from endpoint:', endpoint);

    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('[Activities] Raw data:', data);
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('[Activities] Parsed results:', results);
        setItems(results);
      })
      .catch(err => console.error('[Activities] Fetch error:', err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h3 className="mb-0">Activities</h3>
      </div>
      <div className="card-body">
        {items.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  {Object.keys(items[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <tr key={idx}>
                    {Object.values(item).map((val, i) => (
                      <td key={i}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-muted">No activities found.</div>
        )}
      </div>
    </div>
  );
}

export default Activities;
