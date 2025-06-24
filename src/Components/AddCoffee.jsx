import React from "react";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeedata = Object.fromEntries(formData.entries());

    console.log(coffeedata); // You can send `data` to server
    form.reset();
  };

  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-base-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#D2B48C] mb-4">
          Add New Coffee
        </h2>
        <p className="text-center text-sm text-gray-500 mb-8 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Chef */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Supplier */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Taste */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text font-semibold">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full mt-2"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control md:col-span-2">
            <button
              type="submit"
              className="btn bg-[#D2B48C] hover:bg-[#c39f75] text-black text-lg w-full">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
