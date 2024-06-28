const BusinessPartners = () => {
    const partnerTypes = ['仕入先', '販売先', '外注先'];
  
    const renderPartnerTable = (type) => (
      <div className="info-section" key={type}>
        <h3>{type}</h3>
        <table>
          <thead>
            <tr>
              <th>社名</th>
              <th>債権比</th>
              <th>商品名</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(4)].map((_, index) => (
              <tr key={index}>
                <td>テキストテキスト</td>
                <td>テキスト</td>
                <td>テキストテキスト</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  
    return (
      <div className="business-partners">
        <h2>取引先</h2>
        {partnerTypes.map(renderPartnerTable)}
      </div>
    );
  };