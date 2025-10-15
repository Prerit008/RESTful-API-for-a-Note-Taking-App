exports.home = async (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Note-Taking App</title>
        <!-- TailwindCSS CDN -->
        <script src="https://cdn.tailwindcss.com"></script>
        <!-- FontAwesome CDN -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body class="bg-gray-50 text-gray-800">

        <!-- Header -->
        <header class="bg-blue-600 text-white py-6 shadow-md">
            <div class="container mx-auto flex justify-between items-center px-4">
                <h1 class="text-3xl font-bold"><i class="fas fa-sticky-note"></i> Note-Taking App</h1>
                <a href="https://github.com/prerit008" target="_blank" class="hover:text-gray-200 flex items-center">
                    <i class="fab fa-github mr-2"></i> prerit008
                </a>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="text-center py-20 px-4">
            <h2 class="text-4xl font-semibold mb-4">Organize Your Notes Effortlessly</h2>
            <p class="text-gray-600 mb-6 max-w-xl mx-auto">
                Create, read, update, and delete your notes securely with our RESTful API backend built with Node.js and MongoDB.
            </p>
            <a href="/api/notes" class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                Get Started
            </a>
        </section>

        <!-- Features Section -->
        <section class="py-16 bg-gray-100">
            <div class="container mx-auto px-4">
                <h3 class="text-3xl font-semibold text-center mb-12">Key Features</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <i class="fas fa-lock text-blue-600 text-3xl mb-4"></i>
                        <h4 class="text-xl font-semibold mb-2">Secure Authentication</h4>
                        <p>Manage user accounts and secure note access with authentication built into the API.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <i class="fas fa-edit text-blue-600 text-3xl mb-4"></i>
                        <h4 class="text-xl font-semibold mb-2">CRUD Operations</h4>
                        <p>Create, read, update, and delete notes efficiently, with a 25% performance improvement over static storage.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <i class="fas fa-check-circle text-blue-600 text-3xl mb-4"></i>
                        <h4 class="text-xl font-semibold mb-2">Reliable & Tested</h4>
                        <p>Comprehensive unit tests ensure that every API endpoint and database model works flawlessly.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-blue-600 text-white py-6 mt-12">
            <div class="container mx-auto text-center">
                <p>&copy; 2025 Note-Taking App. Built with ❤️ by <a href="https://github.com/prerit008" class="underline hover:text-gray-200" target="_blank">prerit008</a></p>
            </div>
        </footer>

    </body>
    </html>
    `);
}