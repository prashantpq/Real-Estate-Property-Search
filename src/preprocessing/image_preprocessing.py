# src/preprocessing/image_preprocessing.py

import cv2
import numpy as np
import os

def preprocess_image(image_path):
    # Load image
    image = cv2.imread(image_path)
    # Resize image
    image = cv2.resize(image, (224, 224))  # Assuming input size for CNN
    # Normalize image
    image = image / 255.0
    return image

def load_images_from_folder(folder):
    images = []
    for filename in os.listdir(folder):
        img_path = os.path.join(folder, filename)
        image = preprocess_image(img_path)
        images.append(image)
    return np.array(images)

if __name__ == "__main__":
    # Example usage
    folder_path = '../data/images/'  # Assuming images are stored in this folder
    images = load_images_from_folder(folder_path)
    print("Loaded images shape:", images.shape)
