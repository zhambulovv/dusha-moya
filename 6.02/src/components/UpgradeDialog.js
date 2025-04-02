import React from "react";

const UpgradeDialog = ({
  show,
  onClose,
  clickUpgrade,
  clickUpgradeCost,
  autoUpgrade,
  autoUpgradeCost,
  envUpgrade,
  envUpgradeCost,
}) => {
  if (!show) return null;

  return (
    <div className="upgrade-dialog">
      <div className="dialog-content">
        <button className="close-button" onClick={onClose}>
          Закрыть
        </button>
        <h2>Улучшения</h2>

        <div className="upgrade-item">
          <p>Улучшить клик (+1) - {clickUpgradeCost} монет</p>
          <button onClick={clickUpgrade}>Улучшить</button>
        </div>

        <div className="upgrade-item">
          <p>Улучшить автодобычу (+2/сек) - {autoUpgradeCost} монет</p>
          <button onClick={autoUpgrade}>Улучшить</button>
        </div>

        <div className="upgrade-item">
          <p>Улучшить окружение - {envUpgradeCost} монет</p>
          <button onClick={envUpgrade}>Улучшить</button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeDialog;
