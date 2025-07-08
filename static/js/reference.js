document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('symbol-search-input');
  const searchResults = document.getElementById('search-results');
  const mainContent = document.querySelector('.main-content');

  if (!searchInput || !searchResults || !mainContent) return;

  let symbols = [];

  function extractSymbols() {
    symbols = [];

    // Find all h4 elements with the symbol pattern
    const symbolElements = mainContent.querySelectorAll('h4');

    symbolElements.forEach(element => {
      const codeElement = element.querySelector('code a');
      const typeElement = element.querySelector('sup sub');

      if (codeElement) {
        const symbolName = codeElement.textContent.trim();
        const symbolType = typeElement ? typeElement.textContent.replace(/[\[\]]/g, '').trim() : '';
        const symbolId = element.id; // Use the h4 element's id instead

        // Skip symbols without valid IDs
        if (!symbolId) {
          return;
        }

        // Find the package this symbol belongs to by looking for the nearest preceding h1
        let packageHeader = element.previousElementSibling;
        while (packageHeader && packageHeader.tagName !== 'H1') {
          packageHeader = packageHeader.previousElementSibling;
        }

        const packageName = packageHeader
          ? packageHeader.textContent.replace('Package ', '').replace(/`/g, '').trim()
          : 'Unknown';
        const packageId = packageHeader ? packageHeader.id : '';

        symbols.push({
          name: symbolName,
          type: symbolType,
          package: packageName,
          packageId: packageId,
          id: symbolId,
          element: element
        });
      }
    });
  }

  function performSearch(query) {
    if (!query.trim()) {
      searchResults.classList.remove('active');
      return;
    }

    const searchTerm = query.toLowerCase();
    const filteredSymbols = symbols.filter(symbol =>
      symbol.name.toLowerCase().includes(searchTerm) ||
      symbol.type.toLowerCase().includes(searchTerm) ||
      symbol.package.toLowerCase().includes(searchTerm)
    ).slice(0, 10);

    if (filteredSymbols.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item">No symbols found</div>';
      searchResults.classList.add('active');
      return;
    }

    const resultsHtml = filteredSymbols.map(symbol => `
      <div class="search-result-item" data-symbol-id="${symbol.id}">
        <div class="search-result-symbol">${symbol.name}</div>
        <div class="search-result-type">${symbol.type}</div>
        <div class="search-result-package">${symbol.package}</div>
      </div>
    `).join('');

    searchResults.innerHTML = resultsHtml;
    searchResults.classList.add('active');

    // Add click handlers for results
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', function() {
        const symbolId = this.dataset.symbolId;
        if (symbolId) {
          const targetElement = document.getElementById(symbolId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            searchInput.value = '';
            searchResults.classList.remove('active');
          }
        }
      });
    });
  }

  // Initialize symbols extraction
  extractSymbols();

  // Search input handler
  searchInput.addEventListener('input', function() {
    performSearch(this.value);
  });

  // Hide results when clicking outside
  document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
      searchResults.classList.remove('active');
    }
  });

  // Keyboard navigation
  searchInput.addEventListener('keydown', function(event) {
    const items = searchResults.querySelectorAll('.search-result-item');
    const activeItem = searchResults.querySelector('.search-result-item.active');

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (activeItem) {
        activeItem.classList.remove('active');
        const nextItem = activeItem.nextElementSibling;
        if (nextItem) {
          nextItem.classList.add('active');
        } else {
          items[0]?.classList.add('active');
        }
      } else {
        items[0]?.classList.add('active');
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (activeItem) {
        activeItem.classList.remove('active');
        const prevItem = activeItem.previousElementSibling;
        if (prevItem) {
          prevItem.classList.add('active');
        } else {
          items[items.length - 1]?.classList.add('active');
        }
      } else {
        items[items.length - 1]?.classList.add('active');
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (activeItem) {
        activeItem.click();
      }
    } else if (event.key === 'Escape') {
      searchResults.classList.remove('active');
      searchInput.blur();
    }
  });
});
