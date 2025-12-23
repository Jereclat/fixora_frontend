      {/* RIGHT SECTION – FORM */}
      <div className="bg-white flex">
        <div className="max-w-xl w-full">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Add Your Service
          </h3>
          <p className="text-gray-500 mb-8">
            Showcase what you do best and let clients know your expertise
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* IMAGE UPLOAD */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Service Image
              </label>

              {formData.imagePreview ? (
                <div className="relative w-full aspect-video border-2 border-gray-200 bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={formData.imagePreview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        imageFile: null,
                        imagePreview: "",
                      }))
                    }
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 text-sm"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-[50%] aspect-video border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 rounded-lg flex flex-col items-center justify-center transition"
                >
                  <Upload className="w-10 h-10 text-gray-400 mb-2" />
                  <span className="text-sm font-medium text-gray-700">
                    Click to upload image
                  </span>
                  <span className="text-xs text-gray-500">
                    PNG, JPG up to 10MB
                  </span>
                </button>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* SERVICE NAME */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Service Rendered
              </label>
              <input
                type="text"
                name="serviceName"
                placeholder="e.g., Plumbing, Interior Design"
                value={formData.serviceName}
                onChange={handleInputChange}
                className="w-full h-11 border border-gray-300 rounded-md px-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* PRICE */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Project Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="e.g., $5,000 - $10,000"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full h-11 border border-gray-300 rounded-md px-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Service Description
              </label>
              <textarea
                name="description"
                placeholder="Describe your service..."
                value={formData.description}
                onChange={handleInputChange}
                className="w-full min-h-[120px] border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition mt-4"
            >
              Add Service to Catalog
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Your service will be visible to potential clients immediately after
            submission.
          </p>
        </div>
      </div>