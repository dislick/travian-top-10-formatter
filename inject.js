(function() {
  /**
   * Adds thousands separators to a number.
   * @param {number|string} x 
   */
  function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  /**
   * Creates a new div that will be used to display progress.
   * @param {number} widthPercentage 
   */
  function createProgressDiv(widthPercentage) {
    let progressDiv = document.createElement('div');
    progressDiv.style.position = 'absolute';
    progressDiv.style.background = 'rgb(224, 235, 223)';
    progressDiv.style.height = '100%';
    progressDiv.style.width = (widthPercentage * 100) + '%';
    progressDiv.style.right = '0';
    progressDiv.style.top = '0';
    progressDiv.style.zIndex = '1';
    return progressDiv;  
  }
  
  function formatTop10(querySelector) {
    let top = [];
    document.querySelectorAll(querySelector).forEach((row) => {
      top.push(Number(row.innerText));
    });

    document.querySelectorAll(querySelector).forEach((valueElement, index) => {
      let percentage = top[index] / top[0];

      let textElement = document.createElement('div');
      textElement.style.position = 'relative';
      textElement.style.zIndex = '2';
      textElement.style.textAlign = 'right';
      textElement.innerText = formatNumber(valueElement.innerText);

      valueElement.innerText = '';
      valueElement.appendChild(textElement);
      valueElement.appendChild(createProgressDiv(percentage));
      valueElement.style.backgroundColor = 'white';
      valueElement.style.position = 'relative';
    });
  }

  formatTop10('#top10_raiders tbody td.val');
  formatTop10('#top10_offs tbody td.val');
  formatTop10('#top10_climbers tbody td.val');
  formatTop10('#top10_defs tbody td.val');
})();