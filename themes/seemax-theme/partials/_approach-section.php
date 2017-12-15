<section class="approach-section" id="approach">
	<img class="background-shape" src="<?php echo get_template_directory_uri(); ?>/img/round-half.svg" >
	<div class="content">

		<div class="approach-intro c-45-wide">
			<h2><?php the_field('approach_headline');?></h2>
			<hr>
			<p><?php the_field('approach_body_copy');?></p>
		</div>

		<div class="services-listing c-35-wide">
			<div class="service-list-header">
				<div class="services-image c-flex-center">
					<?php $image = get_field('services_icon'); if( !empty($image) ): ?>
						<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
					<?php endif; ?>
				</div>
				<h4 class="services-title">
					<?php the_field('services_title');?>
				</h4>
			</div>
			
				<?php if( have_rows('services_list') ):?>
					<?php while ( have_rows('services_list') ) : the_row();?>
						<div class="single-service">
							<span></span>
							<div class="service-words"><?php the_sub_field('service_listing');?></div>
						</div>
				  <?php endwhile;?>
				<?php endif;?>
			
		</div>
	</div>
</section>